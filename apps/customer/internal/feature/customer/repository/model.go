package customer_postgres_repository

type CustomerModel struct {
	ID        string
	Version   int
	UserId    string
	FirstName *string
	LastName  *string
}
