import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }

  public async getPhotoById(id) {
    const { ctx } = this;
    // console.log('aaa', ctx.model.Photo.findAll);
    const result = await ctx.model.Photo.findAll({
      where: {
        id
      }
    });
    return result;
  }

}
