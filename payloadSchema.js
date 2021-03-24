const payloadSchema = {
    "id": 'httpSchema',
    "type": 'object',
    "properties": {
      "version": { type: 'integer', "minimum": 0, "maximum": 1024 },
      "timestamp": { type: 'number', format: 'date-time' },
      "trafficProcessorVersion": { type: 'string' },
      "httpVersion": { type: 'number' },
      "ip": { type: 'string', format: 'ipv4' },
      "httpMethod": { type: 'string', "enum": ["GET"] },
      "mode": { type: 'number' },
      "classification": { type: 'number' },
      "headers": {
        "type": "object",
        "properties": {
          "host": { type: 'string' },
          "user-agent": { type: 'string' },
          "cookie": { "type": "array", "maxItems": 1, "items": { "type": "string"}},
          "authorization": { type: 'string' },
          "accept-encoding": {type: 'string'}
        }
      }
    }, required: ['version', 'timestamp', 'trafficProcessorVersion', 'httpVersion', 'ip', 'httpMethod', 'mode', 'classification', 'headers']
  };
    
  module.exports = payloadSchema;