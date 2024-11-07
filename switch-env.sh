ENV_FILE="./env/$1.env"
TARGET_ENV_FILE="./env/.env"

if test -f "$ENV_FILE"; then
  echo "Switching to $ENV_FILE -> $TARGET_ENV_FILE"
  cp "$ENV_FILE" "$TARGET_ENV_FILE"
else
  echo "Environment file $ENV_FILE not found. Available options are 'staging' or 'localhost'."
  exit 1
fi