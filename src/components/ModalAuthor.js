import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../store/actions'
import Modal from 'react-modal';

const modalStyles = {
  content: {
      background: null,
      border: null
  }
};

class ModalAuthor extends React.Component { 
    
  render() {    
    const {modal} = this.props;
    return (
      <div>
        <Modal
          isOpen={modal.modalProps.open}
          onRequestClose={() => this.props.hideModal()}
          ariaHideApp={false}
          style={ modalStyles }
        >
          <div className="modal">           
              <h2>{modal.modalProps.author}</h2>
              <p>phone: {modal.modalProps.phone}</p>
              <button className="button" onClick={() => this.props.hideModal()}>
                OK
              </button>
          </div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = store => ({
   modal: store.reducers
})

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAuthor)