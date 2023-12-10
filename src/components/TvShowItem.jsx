import { DateTime } from 'luxon';

export default function TvShowItem({ tvShow }) {
	if (!tvShow) return;

	const startDate = DateTime.fromISO(tvShow.startDate).toLocaleString(DateTime.TIME_24_SIMPLE);
	const endDate = DateTime.fromISO(tvShow.endDate).toLocaleString(DateTime.TIME_24_SIMPLE);

	return (
		<div>
			<span className='fw-bold'>
				<span>
					{startDate} - {endDate}
				</span>
			</span>
			<p className='fw-bold'>
				<span className=''>{tvShow.item.title}</span>
			</p>
			<p>{tvShow.item.description != '.' && tvShow.item.description}</p>
			<hr />
		</div>
	);
}
