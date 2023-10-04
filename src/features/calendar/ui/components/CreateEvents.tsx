import React from "react";
import Modal from "../../../../shared/components/modal/Modal";
import Button from "../../../../shared/components/buttons/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { getRandomTailwindColor } from "../../../../shared/helpers/utils";

interface Props {
  onClose: () => void;
  show: boolean;
  date: any;
  events: any;
  setEvents: any;
}

type IFormInput = {
  name: string;
  email: string;
  time: any;
};

const CreateEvents = ({ show, onClose, date, events, setEvents }: Props) => {
  const { register, handleSubmit, reset, control } = useForm<IFormInput>();

  const saveEventsToLocalStorage = (updatedEvents: {
    [key: string]: any[];
  }) => {
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const event = {
      name: data.name,
      email: data.email,
      time: data.time,
      color: getRandomTailwindColor(),
    };

    console.log("before", events);
    const eventDate = date.toISOString().split("T")[0];
    const updatedEvents = { ...events };

    if (updatedEvents[eventDate]) {
      updatedEvents[eventDate].push(event);
    } else {
      updatedEvents[eventDate] = [event];
    }
    console.log("after", updatedEvents);

    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
    reset();
    onClose();
  };

  return (
    <Modal
      width={"400px"}
      show={show}
      onClose={onClose}
      title="Create Event"
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
      <form onSubmit={handleSubmit(onSubmit)}>
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

export default CreateEvents;
