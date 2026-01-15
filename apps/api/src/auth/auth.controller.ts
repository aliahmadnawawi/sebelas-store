import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token, user } = await this.auth.login(body.email, body.password);

    res.cookie('sebelas_session', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      domain: '.sebelasindonesia.app',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return user;
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('sebelas_session', {
      domain: '.sebelasindonesia.app',
      path: '/',
    });
    return { ok: true };
  }
}
