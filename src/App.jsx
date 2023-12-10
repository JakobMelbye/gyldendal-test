import { useState, useEffect } from 'react';
import { fetchAllChannels } from './channelApiService.js';
import ScheduleCard from './components/ScheduleCard.jsx';

function App() {
	const [pageTitle, setPageTitle] = useState('');
	const [channels, setChannels] = useState([]);
	const [selectedChannel, setSelectedChannel] = useState();

	function onClickChannel(channel) {
		setSelectedChannel(channel);
	}

	useEffect(() => {
		fetchAllChannels().then(data => {
			setChannels(data.items);
			setPageTitle(data.title);
		});
	}, []);

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<h1>{pageTitle}</h1>
				</div>
				<div className='row mt-4'>
					<div className='col'>
						<ul className='list-group'>
							{channels.map(channel => (
								<a
									key={channel.id}
									onClick={() => onClickChannel(channel)}
									className='list-group-item list-group-item-action d-flex align-items-center'
								>
									<span>
										<img src={channel.images.logo} height={25} className='me-3' />
									</span>
									<span>{channel.title}</span>
								</a>
							))}
						</ul>
					</div>
					<div className='col'>
						<ScheduleCard channel={selectedChannel} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
