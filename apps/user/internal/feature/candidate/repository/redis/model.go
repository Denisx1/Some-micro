package candidate_redis

type CandidateCacheModel struct {
	UserName    string
	Email       string
	RoleID      string
	ActionToken *string
}
