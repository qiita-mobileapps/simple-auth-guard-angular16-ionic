import { Injectable } from '@decorators/di';
import { attachControllers, Controller, Get, Post, Response } from '@decorators/express';
import * as express from 'express';
import * as session from 'express-session';
import { Response as Res } from 'express';

@Injectable()
@Controller('/')
class AppController {
  private passData = false;

  @Post('/login')
  public login(@Response() res: express.Response): void {
    res.send(this.generateTokens());
  }

  @Post('/refresh')
  public refresh(@Response() res: express.Response): void {
    // emulate long request
    setTimeout(() => res.send(this.generateTokens()), 1000);
  }

  @Get('/data')
  public getData(@Response() res: Res): void {
    this.passData = !this.passData; // TODO 
    res.send([
      {
        'id': 1,
        'name': 'Fabric',
      },
      {
        'id': 2,
        'name': 'FireFly',
      },
      {
        'id': 3,
        'name': 'Iroha',
      },
    ]);
  }

  private generateTokens() {
    return {
      accessClientKey: `client-key-${Math.random()}`,
      refreshClientKey: `refresh-key-${Math.random()}`,
    };
  }
}

const app = express();

const sessionSettings = {
  secret: 'your-api-key',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: true,
}
app.use(session(sessionSettings));

app.use((
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

attachControllers(app, [AppController]);

app.listen(3000);
