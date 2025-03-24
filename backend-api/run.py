# Runs instance of app

from app import create_app
import os

app = create_app()

if __name__ == '__main__':
    # Use the PORT environment variable if defined, otherwise default to 5000.
    port = int(os.environ.get("PORT", 5000))
    # Bind to all interfaces to allow external access.
    app.run(host='0.0.0.0', port=port, debug=True)