import { DateTime } from 'luxon';

const CHANNELS_URL =
	'https://production-cdn.dr-massive.com/api/channels/195869?channel_group=all&device=web_browser&ff=idp%2Cldp%2Crpt&geoLocation=dk&isDeviceAbroad=false&lang=da&page=1&segments=drtv%2Coptedin&sub=Anonymous';

const CHANNEL_SCHEDULE_URL =
	'https://production-cdn.dr-massive.com/api/schedules?&device=web_browser&duration=24&ff=idp%2Cldp%2Crpt&geoLocation=dk&hour=0&isDeviceAbroad=false&lang=da&segments=drtv%2Coptedin&sub=Anonymous';

export async function fetchAllChannels() {
	const url = new URL(CHANNELS_URL);
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

export async function fetchChannelSchedule(channelId) {
	const url = new URL(CHANNEL_SCHEDULE_URL);
	url.searchParams.append('channels', channelId);
	const today = DateTime.now().toFormat('yyyy-MM-dd');
	url.searchParams.append('date', today);
	const response = await fetch(url);
	const data = await response.json();
	return data;
}
