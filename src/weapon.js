function Weapon(config) {
  const name = config.name;
  const damage = config.damage;
  const attackType = config.attackType;

  return { name, damage, attackType };
}

module.exports = Weapon;
