import { useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface FileDto {
  id: number;
  url: string;
}

const fetchMyFiles = async (): Promise<FileDto[]> => {
  const response = await fetch('https://39085646937f8a29.mokky.dev/uploads');
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

const createFile = async (file: File): Promise<{ id: number; url: string }> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('https://39085646937f8a29.mokky.dev/uploads', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  return response.json();
};

const UploadFile: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const { data = [], error, isLoading } = useQuery<FileDto[], Error>({
    queryKey: ['uploads'],
    queryFn: fetchMyFiles,
  });

  const mutation = useMutation<{ id: number; url: string }, Error, File>({
    mutationFn: createFile,
    onSuccess: (newFile) => {
      queryClient.setQueryData<FileDto[]>(['uploads'], (oldData) => [
        ...(oldData || []),
        { id: newFile.id, url: newFile.url },
      ]);
    },
  });

  const handleUpload = () => {
    if (fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files.length > 0) {
      const file = fileInputRef.current.files[0];
      mutation.mutate(file);
    } else {
      console.error('Файл не выбран');
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Uploaded Files</h1>
      <ul>
        {data?.map((obj) => (
          <li key={obj.id}>
            <a href={obj.url} target="_blank" rel="noopener noreferrer">
              View File {obj.id}
            </a>
          </li>
        ))}
      </ul>

      <div>
        <h2>Upload a File</h2>
        <input type="file" ref={fileInputRef} />
        <button onClick={handleUpload} disabled={mutation.isPending}>
          {mutation.isPending ? 'Uploading...' : 'Загрузить'}
        </button>
        {mutation.isError && <p>Error: {mutation.error.message}</p>}
      </div>
    </div>
  );
};

export default UploadFile;