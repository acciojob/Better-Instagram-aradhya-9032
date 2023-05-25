//your code here

$(function() {
  $(".draggable").draggable({
    revert: true, // Snap back to the original position if not dropped on a droppable
    cursor: "move" // Set the cursor to indicate draggable behavior
  });

  $(".draggable").droppable({
    accept: ".draggable", // Only accept other draggable elements
    drop: function(event, ui) {
      // Swap the background images of the dropped element and the target element
      var draggedImage = $(ui.draggable).css("background-image");
      var droppedImage = $(this).css("background-image");
      $(ui.draggable).css("background-image", droppedImage);
      $(this).css("background-image", draggedImage);
    }
  });
});

