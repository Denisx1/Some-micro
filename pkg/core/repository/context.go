package core_repository

import "context"

type TxKey struct{}

// GetExecutor проверяет наличие Tx в контексте.
// Если она есть — возвращает Tx, если нет — возвращает fallback (обычно Pool).
func GetExecutor(
	ctx context.Context,
	fallback Executor,
) Executor {
	if tx, ok := ctx.Value(TxKey{}).(Tx); ok && tx != nil {
		return tx
	}
	return fallback
}
