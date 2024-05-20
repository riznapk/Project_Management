import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ handleAddProject, handleCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalRef = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //show a modal
      modalRef.current.open();
      return;
    }

    handleAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Looks like you forgot to enter the value
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="
            bg-stone-800
            text-stone-50
            hover:text-stone-950
            px-6
            py-2"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={title} type="text" />

          <Input label="Description" isTextArea={true} ref={description} />
          <Input label="Due Date" ref={dueDate} type="date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
