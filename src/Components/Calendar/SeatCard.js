import React, { useState } from 'react';

function SeatCard({seat}) {
    const [isOpen, setIsOpen] = useState(true);

    // const id = seat.id

    function handleTicketPost(e) {
        e.preventDefault();
        fetch("http://localhost:3000/tickets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: 1,
            seat_id: 1
          }),
        })
    }

    // function handleSeatPatch() {
    //     fetch(`http://localhost:3000/tickets/$id`, {
    //         method: 'PATCH',
    //     })
    // }

    function handleToggleOpen() {
        setIsOpen((isOpen) => !setIsOpen)
    }


    return (
      <div style={{color: 'black'}}>
          {seat.section},
          {seat.row},
          {seat.number}
          {isOpen ? (
              <button onClick={handleTicketPost} className="button"> 
                  Buy Ticket
                  {/* Add to Shopping Cart */}
              </button>
          ) : (
              <button onClick={handleToggleOpen} className="button">
                  Sold Out
              </button>
          )}

      </div>
  )
}

export default SeatCard