import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { ApiRoute } from '@apps/server';
import { hc } from 'hono/client';

const client = hc<ApiRoute>('/');
async function fetcher() {
	const res = await client.api.events['data'].$post({ json: { name: 'ciao' } });
	const url = await (await client.api.events['$get']()).json();
	console.log(`🧊 ~ url: `, url);
	const data = await res.json(); 
	console.log(`🧊 ~ res: `, data);
}
fetcher();
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
