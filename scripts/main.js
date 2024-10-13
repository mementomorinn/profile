function changeTable(first, second) {
  const firstTitle = document.getElementById(`title-${first}`);
  const changeTitle = document.getElementById(`title-${second}`);
  const firstTable = document.getElementById(`table-${first}`);
  const changeTable = document.getElementById(`table-${second}`);
  firstTitle.style.transform = "translateY(0px)";
  changeTitle.style.transform = "translateY(4px)";
  firstTable.style.display = "none";
  changeTable.style.display = "block";
}
