import { useEffect, useState } from 'react';
import { fetchChannelSchedule } from '../channelApiService';
import moment from 'moment';
import TvShowItems from './TvShowItems';

export default function ScheduleCard({ channel }) {
	const [scheduleItems, setScheduleItems] = useState();

	useEffect(() => {
		if (!channel) return;
		fetchChannelSchedule(channel.id).then(schedule => {
			if (schedule.length < 1) return;
			setScheduleItems(schedule[0].schedules);
		});
	}, [channel]);

	const today = moment().format('D/MM/YYYY');

	if (!channel) return <></>;

	return (
		<div className='border rounded p-3' style={{ maxHeight: '75vh', overflow: 'auto' }}>
			<span className='card-title d-flex flex-row d-flex'>
				<img src={channel?.images?.logo} height={40} className='me-3' />
				<h2>{channel.title}</h2>
			</span>
			<h4 className='mt-2'>{today}</h4>
			<hr />
			<TvShowItems items={scheduleItems} />
		</div>
	);
}
