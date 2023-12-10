// import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
       
        blur: 3,
      }}
       size="55%"
      opened={modalOpened}
      onClose={() => {
        setModalOpened(false);
      }}
    >
      <form className="infoForm">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          ></input>

          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          ></input>
        </div>

        <div>
        <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
          ></input>
        </div>

        <div>
        <input
            type="text"
            className="infoInput"
            name="livesIn"
            placeholder="Lives In"
          ></input>

        <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          ></input>
        </div>

        <div>
          <input type="text" className="infoInput" placeholder="Relationship Status"></input>
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImage"></input>
          Cover Image
          <input type="file" name="coverImage"></input>
        </div>

        <button className="button info-button">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
