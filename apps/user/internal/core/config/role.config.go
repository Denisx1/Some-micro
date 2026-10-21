package user_config

import (
	"fmt"

	"github.com/kelseyhightower/envconfig"
)

type RoleConfig struct {
	Admin               string `envconfig:"ADMIN" required:"true"`
	Cleaner             string `envconfig:"CLEANER" required:"true"`
	Customer            string `envconfig:"CUSTOMER" required:"true"`
	AdminDescription    string `envconfig:"ADMINDESCRIPTION" required:"true"`
	CleanerDescription  string `envconfig:"CLEANERDESCRIPTION" required:"true"`
	CustomerDescription string `envconfig:"CUSTOMERDESCRIPTION" required:"true"`
	AdminPermission     string `envconfig:"ADMINPERMISSION" required:"true"`
	CleanerPermission   string `envconfig:"CLEANERREPMISSION" required:"true"`
	CustomerPermission  string `envconfig:"CUSTOMERPERMISSION" required:"true"`
}

func NewRoleConfig() (RoleConfig, error) {
	var appCfg RoleConfig
	if err := envconfig.Process("ROLE", &appCfg); err != nil {
		return RoleConfig{}, fmt.Errorf("process app config error: %w", err)
	}
	return appCfg, nil
}
func NewRoleConfigMust() RoleConfig {
	coleCfg, err := NewRoleConfig()
	if err != nil {
		err = fmt.Errorf("get role config: %w", err)
		fmt.Println(err)
		panic(err)
	}
	return coleCfg
}
