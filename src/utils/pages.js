export   const getPages = (totalPages, limit) => {
   Math.ceil(totalPages / limit)
}