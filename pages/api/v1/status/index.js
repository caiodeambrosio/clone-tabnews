function status(request, response) {
  response.status(200).json({ success: "Success" });
}

export default status;
