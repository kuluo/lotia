import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const id = ctx.params.id;
    ctx.body = await ctx.service.test.getPhotoById(id);
  }
}
