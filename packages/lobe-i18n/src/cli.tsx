/* @shebangs */
import { render } from '@lobehub/cli-ui';
import { Command, Option } from 'commander';
import updateNotifier from 'update-notifier';

import packageJson from '@/../package.json';
import { Config } from '@/commands';

const notifier = updateNotifier({
  pkg: packageJson,
  shouldNotifyInNpmScript: true,
});

notifier.notify({ isGlobal: true });

const program = new Command();

program
  .name('lobe-commit')
  .description(packageJson.description)
  .version(packageJson.version)
  .addOption(new Option('-o, --config', 'Setup lobe-i18n preferences'))
  .parse();

interface Flags {
  config?: boolean;
}

const options: Flags = program.opts();
if (options.config) render(<Config />);
