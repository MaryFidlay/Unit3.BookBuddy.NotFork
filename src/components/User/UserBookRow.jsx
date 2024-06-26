import React from "react";

export default function UserBookRow({ newBook }) {
  // TODO - all the checkin/checkout calls
  return (
    <div className="userBookRowButtons">
      <button
        type="button"
        className="button"
        onClick={() =>
          console.log(
            `You would like to checkout ${newBook.title} by ${newBook.author}`
          )
        }
      >
        Checkout Book
      </button>
      <button
        type="button"
        className="button"
        onClick={() =>
          console.log(
            `You would like to check in ${newBook.title} by ${newBook.author}`
          )
        }
      >
        Check In Book
      </button>
    </div>
  );
}
