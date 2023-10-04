import React, { useEffect } from "react";
import Modal from "../../../../shared/components/modal/Modal";
import Button from "../../../../shared/components/buttons/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { getRandomTailwindColor } from "../../../../shared/helpers/utils";

interface Props {
  onClose: () => void;
  show: boolean;
  date?: any;
  events?: any;
  setEvents?: any;
  data: any;
}

type IFormInput = {
  name: string;
  email: string;
  time: any;
};

const UpdateEvents = ({
  show,
  onClose,
  date,
  events,
  setEvents,
  data,
}: Props) => {
  const { register, handleSubmit, reset, control } = useForm<IFormInput>();

  const saveEventsToLocalStorage = (updatedEvents: {
    [key: string]: any[];
  }) => {
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  useEffect(() => {
    reset({ ...data });
  }, [data, reset]);

  const onSubmit: SubmitHandler<IFormInput> = (event) => {
    const body = {
      name: event.name,
      email: event.email,
      time: event.time,
      color: data.color,
    };

    console.log("before", data);
    const eventDate = date.toISOString().split("T")[0];
    const updatedEvents = { ...events };

    const index = updatedEvents[eventDate].filter((data: any) => data !== data);
    updatedEvents[eventDate] = index;
    if (updatedEvents[eventDate]) {
      updatedEvents[eventDate].push(body);
    } else {
      updatedEvents[eventDate] = [body];
    }

    console.log("after", updatedEvents);

    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
    onClose();
  };

  return (
    <Modal
      width={"400px"}
      show={show}
      onClose={onClose}
      title="Edit Event"
      footer={
        <div className="flex justify-end gap-[10px]">
          <Button
            styleType="light"
            onClick={onClose}
            disabled={false}
            size="small"
            label="Cancel"
          />

          <button
            onClick={handleSubmit(onSubmit)}
            className="rounded-lg bg-blue-200 px-4 py-2"
          >
            Save
          </button>
        </div>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-2">
          <label>Name :</label>
          <Controller
            name={"name"} // Nama field yang digunakan dalam validasi
            control={control}
            defaultValue=""
            render={({ field }: any) => (
              <input
                type="text"
                placeholder="Enter events name"
                className="bg-white border-2 w-full px-2 py-1"
                required
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-2">
          <label>Email :</label>
          <Controller
            name={"email"} // Nama field yang digunakan dalam validasi
            control={control}
            defaultValue=""
            render={({ field }: any) => (
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white border-2 w-full px-2 py-1"
                required
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-2">
          <label>Time :</label>
          <Controller
            name={"time"} // Nama field yang digunakan dalam validasi
            control={control}
            defaultValue=""
            render={({ field }: any) => (
              <input
                className="bg-white border-2 w-full px-2 py-1"
                type="time"
                required
                {...field}
              />
            )}
          />
        </div>
      </form>
    </Modal>
  );
};

export default UpdateEvents;
