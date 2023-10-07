import { Controller, Get } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';

@Controller()
export class AppController {
  // We update our constructor to make sure it uses the OctokitService coming from the nestjs-octokit dependency coming from the module. We add the readonly keyword to let the constructor know we're not updating any information in this case.
  constructor(private readonly octokitService: OctokitService) {}

  @Get('/')
  async getCommits() {
    // we write a getCommits function to fetch the data we require (the commits of our repository), using the octokitService
    const response = await this.octokitService.request(
      `GET /repos/wpulido/fulltimeforce-test/commits`,
    );
    // once we get the response, we return the data property that's coming from it, which contains our array of commits that we're later going to use in our frontend.
    return response.data;
  }
}
