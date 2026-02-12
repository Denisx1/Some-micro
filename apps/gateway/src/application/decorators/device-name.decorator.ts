import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const DeviceName = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const userAgent = req.headers['user-agent'] ?? '';

    // Простая обработка, всегда корректно
    if (userAgent.includes('iPhone')) return 'iphone';
    if (userAgent.includes('iPad')) return 'ipad';
    if (userAgent.includes('Android')) return 'android';
    if (userAgent.includes('Mac')) return 'macos';
    if (userAgent.includes('Windows')) return 'windows';

    // Фолбэк
    return userAgent.slice(0, 40).toLowerCase() || 'unknown-device';
  },
);
