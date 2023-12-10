import { DateTime } from 'luxon';

const SHOW_MAX_LIMIT_MINUTES = 60;

export default function TvShowItem({ tvShow }) {
	if (!tvShow) return;

	const startDate = DateTime.fromISO(tvShow.startDate);
	const endDate = DateTime.fromISO(tvShow.endDate);

	const startTime = startDate.toLocaleString(DateTime.TIME_24_SIMPLE);
	const endTime = endDate.toLocaleString(DateTime.TIME_24_SIMPLE);

	const showDurationInMinutes = endDate.diff(startDate).as('minutes');

	let backgroundColor = '';

	if (showDurationInMinutes > SHOW_MAX_LIMIT_MINUTES) {
		backgroundColor = '#82E0AA';
	}

	return (
		<>
			<div className='rounded p-1 mt-1' style={{ backgroundColor: backgroundColor }}>
				<span className='fw-bold'>
					<span>
						{startTime} - {endTime}
					</span>
				</span>
				<p className='fw-bold'>
					<span className=''>{tvShow.item.title}</span>
				</p>
				<p>{tvShow.item.description != '.' && tvShow.item.description}</p>
			</div>
			<hr />
		</>
	);
}
