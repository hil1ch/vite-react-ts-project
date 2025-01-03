import { useState } from 'react';

// Хук для управления состоянием модального окна
export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<string | null>(null);

  const openModal = (type: string) => setIsOpenModal(type);
  const closeModal = () => setIsOpenModal(null);
  const closeApproveModal = () => {
    if (isOpenModal === "approveDeleteFile") {
      setIsOpenModal(null);
    }
  };

  return { isOpenModal, openModal, closeModal, closeApproveModal };
};
