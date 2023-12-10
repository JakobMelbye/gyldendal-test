import { useEffect, useState } from 'react';
import { fetchChannelSchedule } from '../channelApiService';
import moment from 'moment';
import { ScheduleItems } from './ScheduleItems';

export function Schedule({ channel }) {
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
		<div className='card'>
			<div className='card-body'>
				<span className='card-title d-flex flex-row d-flex'>
					<img src={channel?.images?.logo} height={40} className='me-3 a' />
					<h2>{channel.title}</h2>
				</span>
				<h4 className='mt-2'>{today}</h4>
				<hr />
				<p className='card-text'>{channel?.id}</p>
				<ScheduleItems items={scheduleItems} />
			</div>
		</div>
	);
}
