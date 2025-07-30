import { V1GetStateOutputSchema } from '@sutorima/schema';
import styles from './app.module.css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { sutorimaService } from '../services/SutorimaService';
import useStore, { Scene } from '../store';
import Home from '../scenes/Home';
import Banners from '../scenes/Banners';
import Slots from '../scenes/Slots';

const componentBySceneName: Record<Scene, React.FC> = {
  home: Home,
  banner: Banners,
  slots: Slots,
};

export function App() {
  const scene = useStore((store) => store.scene);
  const setScene = useStore((store) => store.setScene);
  const SceneToRender = componentBySceneName[scene];
  const [state, setState] = useState<V1GetStateOutputSchema>();
  useEffect(() => {
    const fetchData = async () => {
      const result = await sutorimaService.getState();
      setState(result);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  if (state === undefined || state === null) {
    return (
      <main className={styles.main}>
        <div className={styles.topBar}>
          Current Scene: {scene}
          uh oh
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.topBar}>
        Current Scene: {scene}
        {`Balance - Bits: ${state.balance.bits} Subs: ${state.balance.subs}`}
      </div>
      <section>main display</section>
      <nav>
        <ul>
          <li>
            <button onClick={(_) => setScene('home')}>Home</button>
          </li>
          <li>
            <button onClick={(_) => setScene('banner')}>Banners</button>
          </li>
          <li>
            <button onClick={(_) => setScene('slots')}>Slots</button>
          </li>
        </ul>
      </nav>
      <SceneToRender />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </main>
  );
}

export default App;
