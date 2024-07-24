import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/react";

interface AddPinCardProps {
  onAddPin: (title: string, content: string) => void;
}

const AddPinCard: React.FC<AddPinCardProps> = ({ onAddPin }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleAddPin = () => {
    if (newTitle && newContent) {
      onAddPin(newTitle, newContent);
      setNewTitle("");
      setNewContent("");
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Ajouter une nouvelle épingle</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonInput
          placeholder="Titre"
          value={newTitle}
          onIonChange={(e) => setNewTitle(e.detail.value!)}
          clearInput
        />
        <IonTextarea
          placeholder="Contenu"
          value={newContent}
          onIonChange={(e) => setNewContent(e.detail.value!)}
          autoGrow
        />
        <IonButton expand="full" onClick={handleAddPin}>
          Ajouter
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default AddPinCard;
