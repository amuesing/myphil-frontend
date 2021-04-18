function SeatCard({ seat, handleSoldSeat }) {
  const id = seat.id

  function handleTicketPost(e) {
      e.preventDefault();
      fetch("http://localhost:3000/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1,
          seat_id: id
        }),
      })
      .then(
        fetch(`http://localhost:3000/seats/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isReserved:true })
      })
    )
    .then(() => handleSoldSeat(id))
    // handleSoldSeat(id)
  }

  // console.log(seat.is_open)

  return (

    <div style={{color: 'black'}}>
        {seat.section},
        {seat.row},
        {seat.number}
        <button className="button" onClick={handleTicketPost}> 
            Buy Ticket
            {/* Add to Shopping Cart */}
        </button>
    </div>
  )
}

export default SeatCard