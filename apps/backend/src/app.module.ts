import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { OctokitModule } from 'nestjs-octokit';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'frontend/dist'),
    }),
    // We declare our OctokitModule in the imports to enable it for the whole application, adding the isGlobal rule and set it to "true". In this case we do not need auth since the repository we're going to fetch is public
    OctokitModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
