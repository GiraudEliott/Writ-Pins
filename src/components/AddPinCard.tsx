import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonInput,
  IonTextarea,
  IonItem,
  IonLabel,
} from "@ionic/react";

import "./PinCard.css";

interface AddPinCardProps {
  onAddPin: (title: string, content: string) => void;
}

const AddPinCard: React.FC<AddPinCardProps> = ({ onAddPin }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddPin = () => {
    if (title.trim() && content.trim()) {
      onAddPin(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Add New Pin</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItem>
          <IonLabel position="stacked">Title</IonLabel>
          <IonInput
            value={title}
            onIonChange={(e) => setTitle(e.detail.value!)}
            placeholder="Enter title"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Content</IonLabel>
          <IonTextarea
            value={content}
            onIonChange={(e) => setContent(e.detail.value!)}
            placeholder="Enter content"
          />
        </IonItem>
        <IonButton expand="full" onClick={handleAddPin}>
          Add Pin
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default AddPinCard;
