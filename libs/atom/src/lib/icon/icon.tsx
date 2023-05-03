import { SIcon } from './icon.style';
import { TIcon } from './icon.type';

export const Icon = ({ icon }: TIcon) => {
  return <SIcon $icon={icon} />;
};
