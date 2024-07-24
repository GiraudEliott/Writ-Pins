import React, { useState } from 'react';
import PinListItem from '../components/PinListItem';
import AddPinCard from '../components/AddPinCard';
import { Pins, getPins } from '../data/pins';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [pins, setPins] = useState<Pins[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getPins();
    setPins(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const addPin = (title: string, content: string) => {
    const newPin: Pins = {
      id: pins.length, // Create a unique ID
      Title: title,
      Content: content,
      Author: 'Unknown', // Default value for new pins
      Tags: [], // Default value for new pins
      Insight: 0, // Default value for new pins
      CreationDate: new Date().toLocaleDateString(), // Current date
    };
    setPins([...pins, newPin]);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {pins.map((m) => (
            <PinListItem key={m.id} pins={m} />
          ))}
        </IonList>

        {/* Add the AddPinCard component */}
        <AddPinCard onAddPin={addPin} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
