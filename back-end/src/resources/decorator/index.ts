//decorator with out parameter

import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

// const decoratorX = () => {
//   return (target, propertyKey, descriptor) => {
//     // do something with 'target' and 'value'..
//     const oldfnc = descriptor.value;
//     descriptor.value = async function (...args) {
//       // do something before
//       // alter args if you want
//       const result = await oldfnc.apply(this, args);
//       // do something after
//     }
//     return descriptor;
//   };
// };

// export default decoratorX;

export const findAllDecorator = () => {
  return (target, propertyKey, descriptor) => {
    const oldFunction = descriptor.value;
    descriptor.value = async function (...args) {
      try {
        if (args[0] === undefined) {
          args[0] = {};
        }
        if (args[0].take) {
          args[0].take = parseInt(args[0].take);
        }
        if (args[0].skip) {
          args[0].skip = parseInt(args[0].skip);
        }
        if (args[0].where) {
          args[0].where = JSON.parse(args[0].where);
        }
        if (args[0].select) {
          args[0].select = JSON.parse(args[0].select);
        }
        if (args[0].orderBy) {
          args[0].orderBy = {
            ...JSON.parse(args[0].orderBy),
            createdAt: 'desc',
          };
        }
        if (args[0].include) {
          args[0].include = JSON.parse(args[0].include);
        }
        const result = await oldFunction.apply(this, args);
        return result;
      } catch (e) {
        if (e.message === 'Not Found' || e.code === 'P2025')
          throw new NotFoundException();
        if (e.message === 'Error') throw new BadRequestException(e);
        if (e.code === 'P2002')
          throw new ConflictException(
            e.meta.target.filter((el) => el !== 'deleted_at'),
          );
        if (e.code === 'P2003')
          throw new NotFoundException(
            `Foreign key constraint failed on the field: ${e.meta.field_name}`,
          );
        if (e.code === 'P2025')
          throw new NotFoundException(
            `Foreign key constraint failed on the field: ${e.meta.field_name}`,
          );
        else if (e.code && e.code.startsWith('P20'))
          throw new BadRequestException(`${e}`);

        // if (e.code && e.code.startsWith('P20'))
        throw new BadRequestException(`${e}`);
      }
    };
    return descriptor;
  };
};
