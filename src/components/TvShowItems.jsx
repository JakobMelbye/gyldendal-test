import TvShowItem from './TvShowItem';
import { DateTime } from 'luxon';

export default function TvShowItems({ items }) {
	if (!items || items.length < 1) return <p>No Information</p>;

	const today = DateTime.now().day;

	const tvShowsToday = items.filter(item => {
		const startDate = DateTime.fromISO(item.startDate);
		const isToday = startDate.day == today;
		return isToday;
	});

	tvShowsToday.sort(function (a, b) {
		return new Date(a.startDate) - new Date(b.startDate);
	});

	const scheduleItems = tvShowsToday.map(tvShow => (
		<div key={tvShow.id}>
			<TvShowItem tvShow={tvShow} />
		</div>
	));

	return <div>{scheduleItems}</div>;
}
