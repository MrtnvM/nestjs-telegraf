import { Telegraf } from 'telegraf';
import { TelegrafModuleOptions } from '../interfaces';

export async function createBotFactory(
  options: TelegrafModuleOptions,
): Promise<Telegraf<any>> {
  const bot = new Telegraf<any>(options.token, options.options);

  bot.use(...(options.middlewares ?? []));

  if (options.launchOptions !== false) {
    if (options.botLaunchDelay) {
      setTimeout(
        () => bot.launch(options.launchOptions as any),
        options.botLaunchDelay,
      );
    } else {
      bot.launch(options.launchOptions);
    }
  }

  return bot;
}
