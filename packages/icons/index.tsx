//  This file is auto-generated and read-only
import React, { FC } from 'react';
import IconDashboardSvg from './svgs/dashboard.svg';
import IconMediaLibrarySvg from './svgs/mediaLibrary.svg';
import IconMoreSvg from './svgs/more.svg';
import IconOptionDotSvg from './svgs/optionDot.svg';
import IconScreenSvg from './svgs/screen.svg';
import IconSeatSvg from './svgs/seat.svg';
import IconTentwentySvg from './svgs/tentwenty.svg';
import IconWatchSvg from './svgs/watch.svg';
import { getSize } from './utils/getSize';
import { IconProps } from './props';

export * from './props';

export const IconDashboard: FC<IconProps> = ({ color = '#000000', size = 'xxs', isRTL = false, testID = 'icon-dashboard' }) => {
  const iconSize = getSize(size);
  return (
    <IconDashboardSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{ scaleX: -1 }] : []
      }}
      testID={testID}
      accessible={true}
      accessibilityRole='image'
    />
  );
};
export const IconMediaLibrary: FC<IconProps> = ({
  color = '#000000',
  size = 'xxs',
  isRTL = false,
  testID = 'icon-mediaLibrary'
}) => {
  const iconSize = getSize(size);
  return (
    <IconMediaLibrarySvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{ scaleX: -1 }] : []
      }}
      testID={testID}
      accessible={true}
      accessibilityRole='image'
    />
  );
};
export const IconMore: FC<IconProps> = ({ color = '#000000', size = 'xxs', isRTL = false, testID = 'icon-more' }) => {
  const iconSize = getSize(size);
  return (
    <IconMoreSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{ scaleX: -1 }] : []
      }}
      testID={testID}
      accessible={true}
      accessibilityRole='image'
    />
  );
};
export const IconOptionDot: FC<IconProps> = ({ color = '#000000', size = 'xxs', isRTL = false, testID = 'icon-optionDot' }) => {
  const iconSize = getSize(size);
  return (
    <IconOptionDotSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{ scaleX: -1 }] : []
      }}
      testID={testID}
      accessible={true}
      accessibilityRole='image'
    />
  );
};
export const IconScreen: FC<IconProps> = ({ color = '#000000', size = 'xxs', isRTL = false, testID = 'icon-screen' }) => {
  const iconSize = getSize(size);
  return (
    <IconScreenSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{ scaleX: -1 }] : []
      }}
      testID={testID}
      accessible={true}
      accessibilityRole='image'
    />
  );
};
export const IconSeat: FC<IconProps> = ({ color = '#000000', size = 'xxs', isRTL = false, testID = 'icon-seat' }) => {
  const iconSize = getSize(size);
  return (
    <IconSeatSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{ scaleX: -1 }] : []
      }}
      testID={testID}
      accessible={true}
      accessibilityRole='image'
    />
  );
};
export const IconTentwenty: FC<IconProps> = ({ color = '#000000', size = 'xxs', isRTL = false, testID = 'icon-tentwenty' }) => {
  const iconSize = getSize(size);
  return (
    <IconTentwentySvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{ scaleX: -1 }] : []
      }}
      testID={testID}
      accessible={true}
      accessibilityRole='image'
    />
  );
};
export const IconWatch: FC<IconProps> = ({ color = '#000000', size = 'xxs', isRTL = false, testID = 'icon-watch' }) => {
  const iconSize = getSize(size);
  return (
    <IconWatchSvg
      color={color}
      height={iconSize}
      width={iconSize}
      style={{
        transform: isRTL ? [{ scaleX: -1 }] : []
      }}
      testID={testID}
      accessible={true}
      accessibilityRole='image'
    />
  );
};
