import { Controller, Get } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';

@Controller()
export class AppController {
  constructor(private readonly octokitService: OctokitService) {}

  @Get('/')
  async getCommits() {
    const response = await this.octokitService.request(
      `GET /repos/wpulido/fulltimeforce-test/commits`,
    );
    return response.data;
  }
}
