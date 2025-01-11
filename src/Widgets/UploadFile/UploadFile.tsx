import { useRef } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { fileListApi } from '../../Shared/api/api-file';
import { toast } from 'react-toastify';
import './UploadFile.css';

const createFile = async (file: File): Promise<{ id: number; url: string }> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('https://39085646937f8a29.mokky.dev/uploads', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Ошибка загрузки');
  }

  return response.json();
};

function UploadFile() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const mutation = useMutation<{ id: number; url: string }, Error, File>({
    mutationFn: createFile,
    async onSuccess() {
      await queryClient.invalidateQueries({
        queryKey: [fileListApi.baseKey],
      })
      toast.success("Файл успешно загружен");
    }
  });

  const handleCreate = () => {
    if (fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files.length > 0) {
      const file = fileInputRef.current.files[0];
      mutation.mutate(file);
    } else {
      console.error('Файл не выбран');
    }
  };
  
  return (
    <div className="file__upload">
        <input className="file__input" type="file" ref={fileInputRef} />
        <button className="upload__btn" onClick={handleCreate} disabled={mutation.isPending}>
          {mutation.isPending ? 'Загрузка...' : 'Загрузить'}
        </button>
    </div>
  );
};

export default UploadFile;