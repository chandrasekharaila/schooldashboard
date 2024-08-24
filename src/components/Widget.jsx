import "./Widget.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoClose } from "react-icons/io5";

const Widget = ({ widgetNumber }) => {
  const [widgetAdded, setwidgetAdded] = useState(false);
  const [show, setshow] = useState(false);
  const [widgetData, setwidgetdata] = useState("");
  const handleClose = () => {
    setwidgetAdded(false);
    setshow(false);
    setwidgetdata("");
  };
  const handleShow = () => setshow(true);
  const handlesubmit = () => {
    setwidgetAdded(true);
    setshow(false);
  };
  return (
    <>
      <div className="widgetContainer">
        {!widgetAdded ? (
          <button className="btn btn-primary" onClick={handleShow}>
            add widget
          </button>
        ) : (
          <div className="realwidget">
            <div className="widgetheader">
              <button className="btn btn-danger" onClick={handleClose}>
                <IoClose></IoClose>
              </button>
            </div>
            <div className="widgetdata">{widgetData}</div>
          </div>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Widget {widgetNumber}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="enter widget data"
            value={widgetData}
            onChange={(e) => setwidgetdata(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlesubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Widget;
