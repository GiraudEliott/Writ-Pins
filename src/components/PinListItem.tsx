import {
    IonDatetime,
    IonItem,
    IonLabel,
    IonNote,
    IonChip
    } from '@ionic/react';
  import { Node } from '../data/pins';
  import './MessageListItem.css';
  
  interface PinsListItemProps {
    pins: Node;
  }
  
  const PinsListItem: React.FC<PinsListItemProps> = ({ pins }) => {
    return (
      <IonItem routerLink={`/message/${pins.id}`} detail={false}>
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel className="ion-text-wrap">
          <h1>{pins.Title}</h1>
          <h3>{pins.Content}</h3>
          {pins.Tags.map((tag, index) => (
          <IonChip key={index} outline={true}>
            {tag}
          </IonChip>
            ))}
        </IonLabel>
      </IonItem>
    );
  };
  
  export default PinsListItem;