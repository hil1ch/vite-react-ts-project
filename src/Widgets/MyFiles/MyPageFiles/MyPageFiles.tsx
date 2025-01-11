import { useRef } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { fileListApi } from "../../../Shared/api/api-file";
import PlaceholderFilePageImage from "../../../Shared/UI/PlaceholderFilePageImage/PlaceholderFilePageImage";
import "./MyPageFiles.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function MyPageFiles() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const { data = [], error, isLoading } = useQuery<FileDto[], Error>({
    queryKey: ['uploads'],
    queryFn: fetchMyFiles,
  });

  const mutation = useMutation<{ id: number; url: string }, Error, File>({
    mutationFn: createFile,
    async onSuccess() {
      await queryClient.invalidateQueries({
        queryKey: [fileListApi.baseKey],
      })
      toast.success("Задача успешно создана");
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="my__page-files">
      <ToastContainer autoClose={2000}/>
      <div>
        <h2>Upload a File</h2>
        <input type="file" ref={fileInputRef} />
        <button onClick={handleCreate} disabled={mutation.isPending}>
          {mutation.isPending ? 'Uploading...' : 'Загрузить'}
        </button>
        {mutation.isError && <p>Error: {mutation.error.message}</p>}
      </div>
      <div className="my__files-title__inner">
        <h3 className="my__files-title">Мои файлы</h3>
      </div>
      <div className="my__page-files__list">
      {data.length > 0 ? (
          data.map((file) => (
            <div className="file__item" key={file.id}>
              <img src="src\images\file-main-page.svg" alt="" />
              <a href={file.url} target="_blank" rel="noopener noreferrer">
                {file.id}
              </a>
            </div>
          ))
        ) : (
          <PlaceholderFilePageImage />
        )}
      </div>
    </div>
  );
}

export default MyPageFiles;
