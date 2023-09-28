import { formatNumber } from './number';
import { formatTime } from './time';

const DEFAULT_AVATAR_ICON =
  'https://raw.githubusercontent.com/farmgitOrg/farm_assets/master/blockchains/mumbai/assets/0xf16cB500aC08CDb1a3B11264B6Cc95C5569F1c4D/logo.png';
const DEFAULT_NETWORK_ICON =
  'https://raw.githubusercontent.com/farmgitOrg/farm_assets/master/blockchains/mumbai/assets/0xf16cB500aC08CDb1a3B11264B6Cc95C5569F1c4D/logo.png';

export const handleTask = (item: any) => {
  const { ape_coin, points, task, tags } = item;
  return {
    apeCoin: ape_coin,
    points,
    tags,
    platformIcon: task.platform_icon || DEFAULT_NETWORK_ICON,
    platform: task.platform,
    name: task.name,
    startTime: task.start_time,
    startTimeText: formatTime(task.start_time),
    endTimeText: formatTime(task.end_time),
    gmt: task.gmt,
    status: task.status,
    taskId: task.id,
    avatarList: task.users?.slice(0, 3)?.map((user: any) => user.user_icon || DEFAULT_AVATAR_ICON),
    userNumText: formatNumber(task.user_cnt),
    userNum: task.user_cnt,
    link: task.link,
    isWeb3: task.web3 === 1,
  };
};
